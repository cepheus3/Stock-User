export const fetchToken=()=>{
   const token= localStorage.getItem('user') !== 'undefined'? localStorage.getItem('user'):null
   return token
}
export const fetchEmail=()=>{
   const token= localStorage.getItem('email') !== 'undefined'? localStorage.getItem('email'):null
   return token
}
export const fetchfirstname=()=>{
   const token= localStorage.getItem('firstname') !== 'undefined'? localStorage.getItem('firstname'):null
   return token
}
export const fetchlastname=()=>{
   const token= localStorage.getItem('lastname') !== 'undefined'? localStorage.getItem('lastname'):null
   return token
}

export const fetchbalance=()=>{
   const token= localStorage.getItem('balance') !== 'undefined'? localStorage.getItem('balance'):null
   return token
}