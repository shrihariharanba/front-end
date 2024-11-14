
let serviceDeatils = {}

if(process.env.RUN_TIME === 'dev') {
    serviceDeatils.HOST = 'http://localhost';
    serviceDeatils.PORT = '3003';
}

export const backend_service_baseurl = serviceDeatils.HOST+":"+serviceDeatils.PORT+"/data";
export const backend_service_api_key = "ZGF0YSBzb3VyY2UgYXBpIGtleQ==";