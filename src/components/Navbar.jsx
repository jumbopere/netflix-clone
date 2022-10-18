import {useEffect, useState} from 'react'

const Navbar = () => {
    const [show, setShow]= useState(false);
    const transitionBar =()=> {
        if(window.scrollY > 100) {
            setShow(true)
        }
        else{
            setShow(false)
        }
    }
    useEffect(()=> {
        window.addEventListener("scroll", transitionBar);
        return () => window.removeEventListener("scroll", transitionBar )
    })
    return (
        <div className={`nav fixed top-0 p-5 w-full h-[40px] z-[1] ease-in transition-all ${show && 'bg-[#111]'} `}>
            <div className=' flex justify-between'>
            <img 
            className='fixed left-5 w-[80px] object-contain cursor-pointer pl-5 top-[10px]  '
           src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />
            <img 
            className='fixed right-5 w-[30px] cursor-pointer '
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAADFCAMAAADT5sbCAAAAaVBMVEUNfoD///8AenwAd3kAdHa/1dUwh4j2+fkAcXP5/Pzx9/d5rq/A2Nnt9PSAsLHi7+9imZqly8yw0NGawcI8i41LlpfS4+S419cmgoSFt7hWnp+vy8s1jpCoxcXL398bholqqaqTuLpzpacDxCnrAAAD20lEQVR4nO3bi5KiOhAG4NBBuQhGgwGDKOD7P+SCWqNCZge5ZOec+r+qranacrptQmKYtIwBAAAAAAAAAAAAAAAAAAAAAAAAALwj7nLW/rOc1nUZc12aJxhneX2SpzpnfJ6Iw9JSsT1Led4WNENWKvVFBI7jBCLVzNp48FyKsMnqhELm7uRo60tbwl2QlpMDDuPr+CurE2t/WjSuXqK1AXMro8HlW1ZnP+mmIha+h3OEsjA3eNLJ6iSTsq664ZxovXgZlHevnRNuxmfllderYkq8YegY9bI6UTk6rWsI58jjwmVQJfpZ4+vYCUmlIZwjDgtX4Z4NWcfPDF7Fpni7pW8pacqajb2l3Lo/LRrVslVQabqPncvYW8BNAlO8pasoZq5i21vxbFTBslmroNw0u4Ol5wU/maqQ45daUxXp0msU16bpWI/e+rh7Q7hkzndsQirtZxX56GtHRX+pnRBucFrDxTtNiOfqbrRg2r5sECp7gzFtE+p3P4HkHE9eP3G7y0o87UGJytPrahvIwspDK38vQ1QTn2qI6fTrsy+tbT15uyr7mpJxpiY+67WUlqnneSKrbTwhPVBZJZfY8+LL+TrLEw3R8bDb7dTRxpR4ycrarLuCzZWW7uYJ9mla21kBAAAAAAAAAAD+D4j/9/+4Ri676q2y2WH2SDxjRs42URyGQjO7ZXBelv5MbVScV5f7WWWg54k4EFVpHAs1Q9ciEa+ehyeL95+84o+jxSyfdmO1f/nXbydKyx+LPpOrr2uXjD/xaH5vvUs6h3sL9zy88l/aH4SsyjE3FnGmdNTr3rA4FvztkDeO6oI+WiPbT4ZiK0W/j8bmvPA7R9WeWDVrvT/wDTQvVHolTE00olr0fb/ze+f8TSEXzXzf/fskId68RJ0vsbEny0lzWxXccFMHTHMp91tVct47qbv9B3epVJskNbZj3WuYqd18KCqib95MIFKpK3U4HBu31zY/1+uDqrRMjXfRYyzTiiy1VD9x0t9f1FacZpnct2QUCfPQvQxiVJHtbxu0iBeJoTdolPRU2evQ79ZBhyQ1z9JPxJdazbqzHFHHNptWh9hXs3z1Ylod7Ki6e4gPhiFRh386DE/NrKyy79ee70todi78d5Rwx12eyzT0/rpoPQWeSJPC/legfsb9W2+SiH+oJBZpVm8Kd+huxTbivJkk1+QUNbWE3tvABJ4XNu8/Wp02+Zp9tnO0j25flyt2142uk/1pddd88tV6c92pkn7aZ/0e7ZaJHhuPm9tWhPivmsqD0b/qGwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJjfHzjmLRpAU9zrAAAAAElFTkSuQmCC" alt="avatar" />

            </div>
        </div>
    )
}

export default Navbar