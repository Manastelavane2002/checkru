export function generateTypographyVariants(variant: string) {
    switch(variant) {
        case 'login-signup-extra-end-white':
            return 'inter font-normal text-sm text-body';
        case 'calender-error':
            return 'inter text-sm text-primary';
        case 'calender-month-name':
            return 'inter text-componentHeader';
        case 'calender-range-dash':
            return 'inter mx-3 text-componentHeader';
        case 'calender-range-name-isSelected':
            return 'inter text-sm text-dashboardBg'
        case 'calender-range-name-isNotSelected':
            return 'inter text-sm text-white';
        case 'calender-day-name':
            return 'inter text-sm text-white';
    }
}
  