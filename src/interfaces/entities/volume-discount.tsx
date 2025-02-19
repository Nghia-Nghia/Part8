export default interface VolumeDiscount {
    id: number;
    title: string;
    subtitle: string;
    label: string|null|undefined;
    discountValue: number;
    quantity: number;
    isDefault: boolean|null|undefined;
}