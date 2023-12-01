import * as React from 'react';
import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { DataTable, Button, Card } from 'react-native-paper';

const PozosList = () => {
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([2, 3, 4, 5, 6]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = useState([
    {
      key: 1,
      nombre: 'Pozo 1',
      tipo: 'Productor',

    },
    {
      key: 2,
      nombre: 'Pozo 2',
      tipo: 'Inyector',

    },
    {
      key: 3,
      nombre: 'Pozo 3',
      tipo: 'Productor',

    },
    {
      key: 4,
      nombre: 'Pozo 4',
      tipo: 'Productor',

    },
    {
      key: 5,
      nombre: 'Pozo 5',
      tipo: 'Inyector',

    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <View style={{ padding: 20 }}>
      <Card>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Nombre</DataTable.Title>
            <DataTable.Title>Tipo</DataTable.Title>
            <DataTable.Title>Accion</DataTable.Title>
          </DataTable.Header>

          {items.slice(from, to).map((item) => (
            <DataTable.Row key={item.key}>
              <DataTable.Cell>{item.nombre}</DataTable.Cell>
              <DataTable.Cell>{item.tipo}</DataTable.Cell>
              <DataTable.Cell>
                <Button style={{ borderRadius: 50, alignContent: 'center' }} buttonColor='#165589' icon="account-edit" mode="contained" onPress={() => console.log('Pressed')}>
                  Modificar</Button>
              </DataTable.Cell>
            </DataTable.Row>
          ))}

          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(items.length / itemsPerPage)}
            onPageChange={(page) => setPage(page)}
            label={`${from + 1}-${to} of ${items.length}`}
            numberOfItemsPerPageList={numberOfItemsPerPageList}
            numberOfItemsPerPage={itemsPerPage}
            onItemsPerPageChange={onItemsPerPageChange}
            showFastPaginationControls
            selectPageDropdownLabel={'Registros por página'}
          />
        </DataTable>
      </Card>
    </View>
  );
};
export default PozosList;
