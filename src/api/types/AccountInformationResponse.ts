import { CommonResponse } from './CommonResponse';

export interface AccountInformationResponse extends CommonResponse {
    data: {
        accountNumber?: string,
        address1Line1?: string,
        address1Line2?: string,
        address1Line3?: string,
        address1PostalCode?: string,
        address1State?: string,
        name?: string,
    };
}
