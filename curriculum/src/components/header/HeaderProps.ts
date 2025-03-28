import {Language} from '../../App'

export interface HeaderProps {
  selectedLan: Language;
  langs: Language[];
  changeLan: (code: Language)=> void;
}