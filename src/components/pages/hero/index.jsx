import "../../../index.css";
export default function Hero() {
  return (
    <>
      <div className="bg-[#211C24] w-[100%]">
        <div className="container flex gap-10 justify-around items-center">
          <div>
            <p className="text-[25px] text-[#909090]">Pro.Beyond.</p>
            <h1 className="text-[96px] font-thin text-[#fff]">
              IPhone 14 <span className="font-bold">Pro</span>
            </h1>
            <p className="text-[18px] text-[#909090]">
              Created to change everything for the better. For everyone
            </p>
            <button className="text-[16px] py-4 px-[56px] text-[#fff] border-[#fff] border mt-6">
              Shop Now
            </button>
          </div>

          <img src="src\assets\Iphone Image.svg" alt="" />
        </div>
      </div>


      <div className="bg-[#FAFAFA]">

         <div className="container pb-[90px]">
        <div className="flex pt-16 justify-between">
          <h4 className="text-[25px]">Browse By Category</h4>
          <div>
            <img className="inline" src="src\assets\Arrow.svg" alt="" />
            <img className="inline" src="src\assets\Arrow 2.svg" alt="" />
          </div>
        </div>
        <br />
        <br />
        <div className="grid grid-cols-6 gap-6">
            <div className="bg-[#EDEDED] w-[160px] h-[130px]  p-5">
                <img className=" m-auto" src="src\assets\Phones.svg" alt="" />
                <h5 className="text-center">Phones</h5>
            </div>
            <div className="bg-[#EDEDED] w-[160px] h-[130px]  p-5">
                <img className=" m-auto" src="src\assets\Phones.svg" alt="" />
                <h5 className="text-center">Phones</h5>
            </div>
            <div className="bg-[#EDEDED] w-[160px] h-[130px]  p-5">
                <img className=" m-auto" src="src\assets\Phones.svg" alt="" />
                <h5 className="text-center">Phones</h5>
            </div>
            <div className="bg-[#EDEDED] w-[160px] h-[130px]  p-5">
                <img className=" m-auto" src="src\assets\Phones.svg" alt="" />
                <h5 className="text-center">Phones</h5>
            </div>
            <div className="bg-[#EDEDED] w-[160px] h-[130px]  p-5">
                <img className=" m-auto" src="src\assets\Phones.svg" alt="" />
                <h5 className="text-center">Phones</h5>
            </div>
            <div className="bg-[#EDEDED] w-[160px] h-[130px]  p-5">
                <img className=" m-auto" src="src\assets\Phones.svg" alt="" />
                <h5 className="text-center">Phones</h5>
            </div>

         
        </div>
      </div>
      </div>
     
    </>
  );
}
