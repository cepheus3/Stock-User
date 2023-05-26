export const fetchToken=()=>{
   const token= localStorage.getItem('user') !== 'undefined'? localStorage.getItem('user'):null
   return token
}
export const fetchEmail=()=>{
   const token= localStorage.getItem('email') !== 'undefined'? localStorage.getItem('email'):null
   return token
}
