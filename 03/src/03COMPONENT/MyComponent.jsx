import {useState,useEffect} from "react"

export const MyComponent = ()=>{
    //state
    const [count,setCount] = useState(1)
    //handler
    const handleClick = ()=>{
        setCount(count+1)
    }
    //최초 1회 실행(1회만 랜더링)
    useEffect(()=>{
        console.log("init setting")
    },[])
    //count state가 변결될때마다 실행
    useEffect(()=>{
        console.log(" state changed..",count)
    },[count])
    return (
        <>
            <h2>MyComponent...</h2>
            <button onClick={handleClick}>Btn Count : {count}</button>
        </>

    )

}