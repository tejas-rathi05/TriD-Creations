import { activeBorder, gemState } from "@/state/atoms/GemState";
import React from "react";
import { useRecoilState } from "recoil";
import Image from "next/image";
import { activeMetalState, metalState } from "@/state/atoms/metalState";

const ColorPicker = () => {
  const [gemColor, setGemColor] = useRecoilState(gemState);
  const [activeGem, setActiveGem] = useRecoilState(activeBorder);
  const [metal, setMetal] = useRecoilState(metalState)
  const [activeMetal, setActiveMetal] = useRecoilState(activeMetalState)

  const changeColorToRuby = () => {
    setGemColor("Ruby");
    setActiveGem("Ruby");
  };
  const changeColorToSapphire = () => {
    setGemColor("Sapphire");
    setActiveGem("Sapphire");
  };
  const changeColorToWhite = () => {
    setGemColor("White");
    setActiveGem("White");
  };

  const changeMetalToGold = () => {
    setMetal('Gold');
    setActiveMetal("Gold")
  }
  const changeMetalToRoseGold = () => {
    setMetal('RoseGold')
    setActiveMetal("RoseGold")
  }
  return (
      <div className="bg-gray-200 rounded-2xl text-lg font-bold font-[Poppins] tracking-wider shadow-[5px_5px_rgba(0,0,0,_0.5)] w-[250px] ">
      <div className="px-5 py-1">
        <h4>Gems</h4>
        <div className="flex justify-start items-center w-full p-2 gap-5">
          <div
            className={`h-[40px] w-[40px] rounded-full cursor-pointer p-1 ${
              activeGem === 'Ruby' && 'ring-offset-2 ring-2 ring-black'
            }`}
            onClick={changeColorToRuby}
          >
            <Image
              src='/materials/Ruby.png'
              alt="Ruby"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
          <div
            className={`h-[40px] w-[40px] rounded-full cursor-pointer p-1 ${
              activeGem === 'Sapphire' && 'ring-offset-2 ring-2 ring-black'
            }`}
            onClick={changeColorToSapphire}
          >
            <Image
              src='/materials/Sapphire.png'
              alt="Sapphire"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
          <div
            className={`h-[40px] w-[40px] rounded-full cursor-pointer p-1 ${
              activeGem === 'White' && 'ring-offset-2 ring-2 ring-black'
            }`}
            onClick={changeColorToWhite}
          >
            <Image
              src='/materials/Diamond.png'
              alt="Diamond"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="px-5 py-1">
        <h4>Metal</h4>
        <div className="flex justify-start items-center w-full p-2 gap-5">
          <div className={`h-[40px] w-[40px] rounded-full p-1 ${
              activeMetal === 'Gold' && 'ring-offset-2 ring-2 ring-black'
            }`} onClick={changeMetalToGold}>
          <Image
              src='/materials/Gold.png'
              alt="Gold"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
          <div className={`h-[40px] w-[40px] rounded-full p-1 ${
              activeMetal === 'RoseGold' && 'ring-offset-2 ring-2 ring-black'
            }`} onClick={changeMetalToRoseGold}>
          <Image
              src='/materials/RoseGold.png'
              alt="RoseGold"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
