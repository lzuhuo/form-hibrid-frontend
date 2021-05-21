import { useRouter } from 'next/router';

export function pid(){
    const {query}  = useRouter()
    const pid : string | string[] = query.pid
    
    return pid[0];
}