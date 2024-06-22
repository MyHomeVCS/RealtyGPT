import { IFilterFields } from 'src/interfaces';

export const getValidFields = (params: IFilterFields): Partial<IFilterFields> =>
  Object.entries(params).reduce<Partial<IFilterFields>>((p, [k, v]) => {
    return {
      ...p,
      ...(v !== '' ? { [k.replace('$', '')]: v } : {}),
    };
  }, {});
