import { HostsSchema } from './hosts-schema';

export class Hosts {
    public static async get(): Promise<HostsSchema> {
        const res = await fetch('http://localhost:3001/get-hosts');
        const data: HostsSchema = await res.json();

        return data;
    }
}