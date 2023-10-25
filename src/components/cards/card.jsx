const IMAGE_URL = 'https://picsum.photos/500';
export const Card = ({ children, ...props }) => {
  const { item, selectRadio } = props;

  //play radio on click card
  const handleClick = () => {
    const { name, url_resolved, url } = item;
    const radio = {
      name,
      url_resolved,
      url,
    };
    selectRadio(radio);
  };

  return (
    <div onClick={handleClick} className="flex flex-col items-stretch basis-1/4 bg-white rounded-lg shadow-md cursor-pointer md:flex-row md:max-w-md hover:bg-gray-100">
      <img className="object-cover w-full h-16 rounded-t-lg md:h-32 md:w-32 md:rounded-none md:rounded-l-lg" src={item.favicon ? item.favicon : IMAGE_URL } alt="" />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">{item.name}</h5>
        <p className="mb-3 font-normal text-gray-700">{item.country}</p>
      </div>
    </div>

  )
}