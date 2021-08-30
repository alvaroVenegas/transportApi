El objetivo de la aplicacion es gestionar una empresa de transporte de manera interna. Para ello:

La aplicacion consta de 5 bases de datos las cuales son:
    City: base de datos la cual tiene datos de los pueblos de España, solo para leer.
    Product: base de datos que contiene la informacion de los materiales a transportar.
    Trucks: Camiones de los que dispone la empresa con informacion de cada camion.
    User: Informacion de los usuarios.
    Sending: Informacion de los envios, donde van, en que camion, quien conduce, que tranporta, etc.

Para ello hay un rol administrador que puede hacer todo, el es único que puede hacer CRUD de otros usuarios y tiene permiso para todos los demas CRUD.
Tambien esta el rol de office, el cual puede crear hacer CRUD de todo menos de los usuarios.
Y por último esta el rol de driver el cual sólo puede hacer get de sus envios.

Hay una petición que es la de cambio de contraseña la cual la hace cada usuario a su propio id.
