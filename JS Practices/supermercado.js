/*

##################################
#debo solucionar la clase de mayor jerarquia quedo con un error.
##################################

Un supermercado maneja el catálogo de los productos que vende. 
De cada 

producto se conoce su nombre, precio, 
y si el mismo es parte del programa Precios Cuidados o no.
Por defecto, el producto no es parte del programa,
a menos que se especifique lo contrario.

#######################
Para ayudar a los clientes, el supermercado quiere
realizar descuentos en productos de Primera Necesidad.
#######################

Es por eso que al calcular el precio de un producto de Primera Necesidad,
se aplica un descuento del 10%.

Es decir:
precioProductoPrimeraNecesidad = precioBaseDelProducto * 0.9
El supermercado, del cual se conoce el nombre y la dirección,
desea conocer la 

##################################
cantidad total de productos que comercializa
y la suma total de los precios de los mismos.
##################################

Implementar una solucion
Suponga ahora que el descuento a aplicar en cada producto de
primera necesidad puede ser distinto y se debe poder definir 
al momento de crear el mismo.

Por ejemplo, el arroz puede 
ser un producto de primera necesidad con un descuento del 8%,
mientras que leche podría ser otro producto de primera 
necesidad con un decuento del 11%. Esto es sólo un ejemplo.

El descuento a aplicar en cada producto de primera 
necesidad debe ser configurable al momento de crearlo.

*/

class Supermercado{
    
    constructor(nombre,direccion){
        this.nombre = nombre
        this.direccion = direccion 
    }

    /*get_mostrar(this){
        console.log('Soy un objeto de supermercado')
    }*/

    //length(Catalogos.contenedor)

}

// higiene (cantidad = 2)
// -> Guillete
// -> PapelHig

class Catalogos{
    //atributos

    constructor(nombreCategoria){
        this.nombreCategoria = nombreCategoria
        this.contenedor = []
        this.cantidad = 0
        this.totalCategoria = 0
        
    }

    set_product(Producto){ // Producto es un objeto
        this.contenedor.push(Producto) // agrego el producto a la lista
        this.cantidad +=1

        if (Producto.PrecioCuidado == false){
            this.totalCategoria += Producto.precioBaseDelProducto
        } else {
            this.totalCategoria += Producto.PrecioCuidado
        }

    }
    //metodos
}

class Productos{
    
    //Atributos
    
    constructor(nombre,precioBaseDelProducto,PrecioCuidado = false,descuentoPersonalizado = 10){
        this.nombre = nombre
        this.precioBaseDelProducto = precioBaseDelProducto
        this.PrecioCuidado = PrecioCuidado 

        if(this.PrecioCuidado){
            this.PrecioCuidado = this.precioBaseDelProducto - (this.precioBaseDelProducto*(descuentoPersonalizado/100))
        } 
    }

    // Metodos
    
}

//supermercado
const jumbo = new Supermercado('jumbo', 'Av simpre trola 130')

//categoria
const higiene = new Catalogos('Higiene y Limpieza')
//objetos
const maquinaAfeitar = new Productos('Guillete',4000)
const jabon = new Productos('dove',170, true, 9)
const detergente = new Productos('magistral',500, true, 20)

//categoria
const deportes = new Catalogos('Deportes')

const bicicleta = new Productos('BMX',42000)
const quatriciclo = new Productos('BMW',42000)
const skate = new Productos('BM',42000)



Higiene.set_product(maquinaAfeitar)
Higiene.set_product(jabon)
Higiene.set_product(detergente)
console.log(Higiene.cantidad)



/*
const jumbo = new Supermercado('jumbo', 'Av simpre viva 130')


const Guillete = new Productos(40,20, true)
const Guillete2 = new Productos(40,20, true)
const Guillete3 = new Productos(40,20, true)

const Guillete4 = new Productos(40,20, true)

console.log(Higiene)

Higiene.contenedor.push(Guillete2)
Higiene.contenedor.push(Guillete3)
Higiene.contenedor.push(Guillete4)

console.log(Higiene.contenedor)
Supermercado
    Catalago
        ->Productos


*/
