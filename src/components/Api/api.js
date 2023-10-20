import './server';

export default async function getVans(){
   const res =  await fetch("/api/vans");
    
    if(!res.ok){
        throw {
            message: 'Failed to fetch vans',
            statusText: res.statusText,
            statusCode: res.statusCode
        }
    }

   const data = await res.json();
    return data;
}

export default async function getHostVanLayout(hostid){
    const res = await fetch(`/api/vans/${hostid}`);
    
    if(!res.ok){
        throw {
            message: 'Failed to fetch Host Van Detail',
            statusText: res.statusText,
            statusCode: res.statusCode
        }
    }

    const data = await res.json();
    return data;
}

export default async function getHostVans(){
    const res =  await fetch("/api/host/vans");
     
     if(!res.ok){
         throw {
             message: 'Failed to fetch host vans',
             statusText: res.statusText,
             statusCode: res.statusCode
         }
     }
 
    const data = await res.json();
     return data;
 }






