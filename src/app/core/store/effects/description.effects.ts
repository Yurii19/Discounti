import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { getDescription, requestDescription } from '../actions/description.actions';
import { DescriptionService } from '../../services/description/description.service';
import { map, mergeMap } from "rxjs/operators";

@Injectable()
export class DescriptionEffects {

  constructor(
    private actions$: Actions,
    private descriptionService: DescriptionService
  ) {}

  descriptionData$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getDescription),
        mergeMap(() => this.descriptionService.getDescriptionRequest()
          .pipe(
            map( (data: any) => {
              const description = this.descriptionService.handleRemoteDescription(data)
              return { type: 'requestDescription', data: description};
            })
          )
      ))
    )
}