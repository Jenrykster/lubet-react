import { RoundedPicture } from './styles';

export const ProfilePicture = (props: { img: string; alt: string }) => {
  return <RoundedPicture src={props.img} alt={props.alt}></RoundedPicture>;
};
