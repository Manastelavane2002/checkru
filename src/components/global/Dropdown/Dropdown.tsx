import React, { useEffect, useMemo, useRef, useState } from 'react';
import { DropdownProps, emptyValues } from 'src/components/global/Dropdown/Dropdown.types'

const emptyRect: DOMRect = emptyValues && {
  ...emptyValues,
  toJSON: () => JSON.stringify(emptyValues),
};
export function Dropdown({
  children,
  position = 'auto',
  open: openProp,
  onChange,
  className = '',
  fullWidth = false,
}: DropdownProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [mouseOverButton, setMouseOverButton] = useState(false);
  const [mouseOverPanel, setMouseOverPanel] = useState(false);
  const [buttonRect, setButtonRect] = useState<DOMRect>(emptyRect);
  const [panelRect, setPanelRect] = useState<DOMRect>(emptyRect);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const open = openProp ?? internalOpen;
  const setOpen = (o: boolean) => {
    if (openProp === undefined) {
      setInternalOpen(o);
    }
    onChange?.(o);
  };

  useEffect(() => {
    if (buttonRef.current) {
      const onResize = () => {
        if (buttonRef.current) {
          setButtonRect(buttonRef.current.getBoundingClientRect());
        }
      };
      new ResizeObserver(onResize).observe(buttonRef.current);
    }
    if (panelRef.current) {
      const onResize = () => {
        if (panelRef.current) {
          setPanelRect(panelRef.current.getBoundingClientRect());
        }
      };
      new ResizeObserver(onResize).observe(panelRef.current);
    }
  }, []);

  let positionValues = useMemo(() => {
    let positionValues = {};
    let vertical = 'bottom';
    let horizontal = 'left';
    if (position === 'auto') {
      const screenWidth = global?.window?.screen.availWidth;
      const screenHeight = global?.window?.screen.availHeight;
      const { right, left, top, bottom, width, height } = panelRect;
      if (screenWidth < right && left >= width) {
        horizontal = 'left';
      }
      if (screenHeight < bottom && top >= height) {
        vertical = 'top';
      }
    } else {
      [vertical, horizontal] = position.split('-');
    }
    positionValues = {
      [vertical === 'bottom' ? 'top' : 'bottom']: buttonRect.height,
      [horizontal === 'right' ? 'left' : 'right']: 0,
    };
    return positionValues;
  }, [position, buttonRect.height, panelRect]);

  const width = fullWidth ? 'w-full' : 'w-fit';

  return (
    <div
      className={`${width} h-fit relative`}
      tabIndex={0}
      onBlur={() => {
        if (!mouseOverPanel) {
          setOpen(false);
        }
      }}>
      <div
        ref={buttonRef}
        className={`${width} h-fit`}
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setMouseOverButton(true)}
        onMouseLeave={() => setMouseOverButton(false)}>
        {children[0]}
      </div>
      <div
        ref={panelRef}
        className={`${width} ${className} h-fit absolute z-10 ${open ? 'block' : 'hidden'}`}
        style={{
          ...positionValues,
        }}
        onMouseEnter={() => setMouseOverPanel(true)}
        onMouseLeave={() => setMouseOverPanel(false)}
        onBlur={() => {
          if (!mouseOverButton) {
            setOpen(false);
          }
        }}>
        {children[1]}
      </div>
    </div>
  );
}

Dropdown.Panel = function ({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
};

Dropdown.Button = function ({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
};

export default Dropdown