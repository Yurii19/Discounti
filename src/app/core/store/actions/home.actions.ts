import { createAction, props } from '@ngrx/store';
import { IDiscount } from '../../../shared/variables';

interface Action {
  type: string;
}

export const sortDiscounts = createAction(
  'sortDiscounts',
  props<{ sortType: string}>()
);

export const getNewDiscounts = createAction('getNewDiscounts');

export const requestDiscounts = createAction(
  'requestDiscounts',
  props<{ data: any}>()
);

export const addDiscount = createAction(
  'addDiscount',
  props<{ newDiscount: IDiscount }>()
);