interface InsuranceInterface {
    id: number;
    status: string;

    setVehicle(vehicle: any): void;

    submit(): Promise<boolean>;
}

class TFInsurance implements InsuranceInterface {
    id: number;
    status: string;
    private vehicle: any;

    setVehicle(vehicle: any): void {
        this.vehicle = vehicle;
    }

    async submit(): Promise<boolean> {
        const res = await fetch('',
            {
                method: 'POST',
                body: JSON.stringify({vehicle: this.vehicle})
            });
        const data = await res.json();
        return data.isSuccess;
    }
}

class ABInsurance implements InsuranceInterface {
    id: number;
    status: string;
    private vehicle: any;

    setVehicle(vehicle: any): void {
        this.vehicle = vehicle;
    }

    async submit(): Promise<boolean> {
        const res = await fetch('ab',
            {
                method: 'POST',
                body: JSON.stringify({vehicle: this.vehicle})
            });
        const data = await res.json();
        return data.yes;
    }
}

