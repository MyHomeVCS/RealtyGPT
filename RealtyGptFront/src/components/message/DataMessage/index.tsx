import { IDataMessage } from 'src/interfaces/message';
import { FC } from 'react';
import { BalconyIcon, BathRoomIcon, PriceIcon, PricePeerMeterIcon, RoomsIcon, SurfaceIcon } from 'src/components/message/DataMessage/icons';

import './index.css';

interface IMessageWithDataProps {
  message: IDataMessage;
}

export const DataMessage: FC<IMessageWithDataProps> = ({ message }) => {
  return (
    <div className="apartmentCardsWrapper">
      {message.content.map((data, i) => (
        <div key={i} className="apartmentCard">
          <div className="apartmentCard__image">
            <div className="apartmentCard__name">{data.number}</div>
            <img src={data.img} alt="Apartment drawing ..." />
          </div>
          <div className="apartmentCard__content">
            <div className="apartmentCard__address">{data.address}</div>
            <div className="apartmentCard__infoItem">
              <div className="apartmentCard__infoItem__iconGroup">
                <SurfaceIcon /> <div> Մակերես </div>
              </div>
              <div>{data.apartmentArea}մ²</div>
            </div>
            <div className="apartmentCard__infoItem">
              <div className="apartmentCard__infoItem__iconGroup">
                <RoomsIcon /> <div> Սենյակներ </div>
              </div>
              <div>{data.roomsCount}</div>
            </div>
            <div className="apartmentCard__infoItem">
              <div className="apartmentCard__infoItem__iconGroup">
                <BathRoomIcon /> <div> Սանհանգույցներ </div>
              </div>
              <div>{data.bathrooms}</div>
            </div>
            <div className="apartmentCard__infoItem">
              <div className="apartmentCard__infoItem__iconGroup">
                <BalconyIcon /> <div> Պատշգամբներ </div>
              </div>
              <div>{data.balcony}</div>
            </div>
            <div className="apartmentCard__infoItem">
              <div className="apartmentCard__infoItem__iconGroup">
                <PricePeerMeterIcon /> <div> 1 մ² արժեք </div>
              </div>
              <div>{data.pricePerSquareMeter}</div>
            </div>
            <div className="apartmentCard__infoItem">
              <div className="apartmentCard__infoItem__iconGroup">
                <PriceIcon /> <div>Ընդհանուր արժեք</div>
              </div>
              <div>{data.commonPrice}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
