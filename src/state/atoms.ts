import { atom } from 'recoil';

export const selectedSkillState = atom<string>({
  key: 'selectedSkillState',
  default: '',
});
