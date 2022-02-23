import React, { useEffect, useState } from 'react';
import GenericInput from './GenericInput.react';

export default ({ name }) => {
  const [dictProps, setDictProps] = useState<any>({
    dict_params: [
      {
        id: 'prop1',
        label: 'Property1',
        value: 'Value1',
      },
      {
        id: 'prop2',
        label: 'Property2',
        value: 'Value2',
      },
    ],
  });
  //const stateValue = useState(dictProps);
  return (
    <>
      <h1>Hello {name}!</h1>
      <GenericInput
        dictProps={dictProps}
        onChange={(id: string, name: string, value: string) => {
          console.log(dictProps);
          let dictParam = { ...dictProps };
          console.log('dictParam: ', dictParam.dict_params);
          dictParam.dict_params[0].value = value;

          //let dictValueLocal = [...stateValue, ...dictParam];

          setDictProps(dictParam);
          console.log('id: ', id, 'name: ', name, 'value: ', value);
        }}
        type="dict"
      />
    </>
  );
};
