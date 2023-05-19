import { ElementType } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckSquare,
  Download,
  File,
  FileAlt,
  Lock,
  Mail,
  MinusSquare,
  Square,
  UploadCloud,
} from '../../public/assets/icons';
import { IconTypes } from 'src/components/global/Icon/Icon.types';

export const iconPack: Record<IconTypes, ElementType> = {
  'arrow-left': ArrowLeft as ElementType,
  'arrow-right': ArrowRight as ElementType,
  calendar: Calendar as ElementType,
  'check-square': CheckSquare as ElementType,
  download: Download as ElementType,
  file: File as ElementType,
  'file-alt': FileAlt as ElementType,
  lock: Lock as ElementType,
  mail: Mail as ElementType,
  'minus-square': MinusSquare as ElementType,
  square: Square as ElementType,
  'upload-cloud': UploadCloud as ElementType,
};
