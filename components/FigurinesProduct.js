export default function FigurinesProduct(props) {
  return (
    <div className={props.direction}>
      <div className="w-auto p-10 flex flex-row">
        <Image src={props.image} alt={props.imageName} />
        <Image src={props.image2} alt={props.imageName2} />
      </div>
      <div className="border-dashed w-auto border-black border-2 p-10">
        <h1 className="text-2xl font-mono text-center">{props.header}</h1>
        <div> {props.productText} </div>
        <div className="flex justify-center items-center">
          <button className="text-xl font-mono text-center italic font-bold justify-center w-3/12 bg-indigo-300 border-2 hover:bg-indigo-800">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
