import * as React from 'react';
import { ReactNode } from 'react';
import { IMAGES } from 'src/constants/images';

export type AuthContainerProps = {
  children: ReactNode;
  error?: string;
  subTitle?: string;
  title: string;
};

export const extractErrorCodeFromMessage = (string: string) => {
  return string.replace(
    /InvalidPasswordException:|NotAuthorizedException:|LimitExceededException:|UsernameExistsException:/g,
    ''
  );
};
export function AuthContainer({ title, subTitle, children, error }: AuthContainerProps) {
  return (
    <div className=" h-screen p-8 bg-dashboardBg">
      <div className="max-w-sm m-auto">
        <div className="flex justify-center">
          <img src={IMAGES.LOGO} alt="logo" className="cursor-pointer h-28" />
        </div>
        <div className="pt-4">
          {title && (
            <h1 className="text-center text-[36px] font-[600] text-semibold text-white">{title}</h1>
          )}
          {subTitle && (
            <h2 className="text-center text-[14px] font-[400] text-md text-secondaryText mx-8 text-body">
              {subTitle}
            </h2>
          )}
        </div>
        <div className="h-12">
          {error && (
            <div className="border-red-500 bg-red-500/20 h-10 rounded flex justify-center items-center">
              <div className="text-red-500">{extractErrorCodeFromMessage(error)}</div>
            </div>
          )}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
AuthContainer.defaultProps = {
  error: '',
  subTitle: '',
};
