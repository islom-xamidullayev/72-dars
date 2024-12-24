export default function Footer() {
  return (
    <>
      <div className="bg-black">
        <div  className=" container pt-[120px] text-[#cfcfcf]  flex justify-between">
            <div>
                <img src="src\assets\Logo (5).svg" alt="" />
                <p>We are a residential interior design firm located in <br />Portland. Our boutique-studio offers more than</p>
            </div>

            <ul className="flex flex-col gap-[10px]">
                <li className="text-[#fff] text-[18px] font-medium">Services</li>
                <li>Bonus program</li>
                <li>Gift cards</li>
                <li>Credit and payment</li>
                <li>Service contracts</li>
                <li>Non-cash account</li>
                <li>Payment</li>
                
            </ul>

            <ul className="flex flex-col gap-[10px]">
                <li className="text-[#fff] text-[17.5px] font-medium">Assistance to the buyer</li>
                <li>Find an order</li>
                <li>Terms of delivery</li>
                <li>Exchange and return of goods</li>
                <li>Guarantee</li>
                <li>Frequently asked questions</li>
                <li>Terms of use of the site</li>
                
            </ul>

        </div> 
        <div className="container pt-9 pb-11"> 
              <img className="" src="src\assets\Social Icons.svg" alt="" />
        </div>
      
       
      </div>
    </>
  );
}
