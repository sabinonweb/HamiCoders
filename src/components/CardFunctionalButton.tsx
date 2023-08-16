interface CardButton {
  icon: React.ReactNode;
  value?: number;
}
function CardFunctionalButton({ button }: { button: CardButton }) {
  return (
    <div className="flex px-4 items-center card-button">
      <p className="text-xl font-bold text-themeLabelTertiary p-2 cursor-pointer">
        {button.icon}
      </p>
      {button.value !== undefined && (
        <p className="text-xl text-themeLabelTertiary">{button.value}</p>
      )}
    </div>
  );
}

export default CardFunctionalButton;
