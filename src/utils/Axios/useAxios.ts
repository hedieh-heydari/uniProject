import { useEffect, useRef } from 'react';
import Axiose from './axios';


interface axiosconf {
   method: string;
   url: string;
   header?: object;
   body?: object;
}
const useAxios = (
   {
      method,
      url,
      header = {
         'Content-Type': 'application/json'
      },
      body = {}
   }: axiosconf,
   effectVariable: any[]
) => {
   if (method === 'get') {
      const initialRender = useRef(0);
      let data: any;
      useEffect(() => {
         if (initialRender.current > 1) {
            data = Axiose.get(url, header);
         } else {
            initialRender.current += 1;
         }
      }, [...effectVariable]);

      return { data };
   } else if (method === 'post') {
      const initialRender = useRef(0);
      let data: any;

      useEffect(() => {
         if (initialRender.current > 1) {
            data = Axiose.post(url, header, body);
         } else {
            initialRender.current += 1;
         }
      }, effectVariable);

      return { data };
   } else if (method === 'put') {
      let data: any;
      const initialRender = useRef(0);

      useEffect(() => {
         if (initialRender.current > 1) {
            data = Axiose.put(url, header, body);
         } else {
            initialRender.current += 1;
         }
      }, effectVariable);

      return { data };
   } else if (method === 'patch') {
      let data: any;
      const initialRender = useRef(0);

      useEffect(() => {
         if (initialRender.current > 1) {
            data = Axiose.patch(url, header, body);
         } else {
            initialRender.current += 1;
         }
      }, effectVariable);

      return { data };
   } else if (method === 'del') {
      const initialRender = useRef(0);
      let data: any;

      if (initialRender.current > 1) {
         data = Axiose.delete(url, header);
      } else {
         initialRender.current += 1;
      }

      useEffect(() => {}, effectVariable);

      return { data };
   } else {
      return 'method is not valide';
   }
};
export default useAxios;
