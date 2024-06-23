// import React, { useState } from 'react'

// const Select = () => {
//     const [select,setSelect] = useState('');
//     const [subSelect, setSubSelect] = useState('');

//     let data =  [
//         {id:1, brand:'Volkswagen', car:['punto', 'namek']},
//         {id:2, brand:'Nissan', car:['sunny', 'micra']},
//         {id:3, brand:'Tata', car:['Punch', 'nexon','altroz','Harrier']},
//         {id:4, brand:'Maruti Suzuki', car:['Buleno', 'Dezire','Swift','Fronks']},
//         {id:5, brand:'Mahindra', car:['XUV300', 'XUV500','XUV700']}

//     ]

//     const changeHandler = (e) =>{
//         setSelect(e.target.value);
//         setSubSelect('');
//     };

//     const selectChange =(e)=>{
//         setSubSelect(e.target.value);
//     };

//     const selectCar = data.find(items => items.brand === select)?.car || [];
//   return (
//     <>
//         <h1>Pick a brand</h1>
//         <select value={select} onChange={changeHandler}>
//             <option value="">Select one brand</option>
//             {
//                 data.map((datas,key)=>(
//                     <option key={key} value={datas.brand}>{datas.brand}</option>
//                 ))
//             }
//         </select>
//         {
//             select && (
//                 <select value={subSelect} onChange={selectChange}>
//                     <option value="">Select a car</option>
//                     {
//                        selectCar.map((car,key)=>(
//                         <option key={key} value={car}>{car}</option>
//                        ))
//                     }
//                 </select>
//             )
//         }
//     </>
//   )
// }

// export default Select

import React, { useState } from 'react'

const Select = () => {
    const [select, setSelect] = useState('');
    const [subSelect, setSubSelect] = useState('');

    let data = [
        { id: 1, brand: 'Volkswagen', car: ['punto', 'namek'] },
        { id: 2, brand: 'Nissan', car: ['sunny', 'micra'] },
        { id: 3, brand: 'Tata', car: ['Punch', 'nexon', 'altroz', 'Harrier'] },
        { id: 4, brand: 'Maruti Suzuki', car: ['Buleno', 'Dezire', 'Swift', 'Fronks'] },
        { id: 5, brand: 'Mahindra', car: ['XUV300', 'XUV500', 'XUV700'] }

    ];

    const handleSelect = (e)=>{
        setSelect(e.target.value);
        setSubSelect('');
    };
    const handleSubSelect = (e)=>{
        setSubSelect(e.target.value)
    }
    
    let cars = data.find((items)=> items.brand === select)?.car || [];
    return (
        <>
            <h1>Pick a brand</h1>
            <select value={select} onChange={handleSelect}>
                <option vlaue="">Pick one</option>
                {
                    data.map((datas,key)=>(
                        <option key={key} value={datas.brand}>{datas.brand}</option>
                    ))
                }
            </select>
            {
                select && (
                    <select value={subSelect} onChange={handleSubSelect}>
                        <option value="">Pick car</option>
                        {
                            cars.map((car,key)=>(
                                <option value={car} key={key}>{car}</option>
                            ))
                        }
                    </select>
                )
            }
        </>
    )
}

export default Select