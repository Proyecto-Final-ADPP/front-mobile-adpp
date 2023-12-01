import * as React from 'react';
import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Card, Text, DataTable, Button } from 'react-native-paper';
import { View } from 'react-native';

const UsuariosList = () => {
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = useState([
    {
      key: 1,
      name: 'Rocio Larrosa',
      rol: 'Admin',

    },
    {
      key: 2,
      name: 'Belen Gimenez',
      rol: 'Supervisor',

    },
    {
      key: 3,
      name: 'Juan Gomez',
      rol: 'Operario',

    },
    {
      key: 4,
      name: 'Martin Velarde',
      rol: 'Operario',

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
        <DataTable.Title>Nombre y Apellido</DataTable.Title>
        <DataTable.Title>Rol</DataTable.Title>
        <DataTable.Title>Accion</DataTable.Title>
        {/* <DataTable.Title >Fat</DataTable.Title> */}
      </DataTable.Header>

      {items.slice(from, to).map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell>{item.rol}</DataTable.Cell>
          <DataTable.Cell>
            <Button style={{borderRadius: 50, alignContent:'center'}} buttonColor='#165589' icon="account-edit" mode="contained" onPress={() => console.log('Pressed')}>
              Modificar</Button> 
          </DataTable.Cell>
          {/* <DataTable.Cell>{item.fat}</DataTable.Cell> */}
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

export default UsuariosList;

