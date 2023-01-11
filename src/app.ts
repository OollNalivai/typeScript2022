interface PaymentPersistent {
    id: number;
    sum: number;
    from: string;
    to: string;
}

type Payment = Omit<PaymentPersistent, 'id'>;
type PaymentReq = Pick<PaymentPersistent, 'from' | 'to'>

type ExtractEx = Extract<'from' | 'to' | Payment, string>
type ExcludeEx = Exclude<'from' | 'to' | Payment, string>
