import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ServiceLanding } from "@/components/Site";
import { cities, services, serviceTitle, type CityKey } from "@/lib/site";
export function generateStaticParams(){return (Object.keys(cities) as CityKey[]).flatMap(city=>services.map(service=>({city,service:service.slug})));}
export async function generateMetadata({params}:{params:Promise<{city:string;service:string}>}):Promise<Metadata>{const {city,service}=await params;if(!cities[city as CityKey])return {};if(!services.some(s=>s.slug===service))return {};const c=cities[city as CityKey];const title=`${serviceTitle[service]} en ${c.name}`;const description=`Consultá por ${serviceTitle[service].toLowerCase()} en ${c.capital}. Información útil y contacto local de Servicell.`;const canonical=`/${city}/${service}`;return {title,description,alternates:{canonical},openGraph:{title:`${title} | Servicell`,description,url:canonical,type:"website"}};}
export default async function ServicePage({params}:{params:Promise<{city:string;service:string}>}){const {city,service}=await params;if(!cities[city as CityKey]||!services.some(s=>s.slug===service))notFound();return <ServiceLanding city={city as CityKey} slug={service}/>;}
