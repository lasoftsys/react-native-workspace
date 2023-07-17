
export interface Card{
    image:string;
    name: string;
    number:string;
    expiry:string;
    cvv:number
   
}

export interface trip{
    id?: string;
    pick_loc?:string;
    drop_loc?:string;
    pick_time?:string;
    drop_time?:string;
    arrival_time?:string;
    cost?:string;
}