# ethernaut

Naught Coin

La que me llevo de este ejercicio es hacer test. En principio no sabia por donde arrancar y trate de inventar una solucion. Pero luego se me ocurrio testear todo el contrato y me di cuenta que no habia leido bien el ERC20 entonces cuando llegue a la parte de aprove y luego allowance me di cuenta de que por aca venia la mano. 

La magia del ejercicio esta aca:

El metodo tranfes esta sobrecargado por el token. Entonces podriamos usar transferFrom(). Pero para eso se debe cumplir:
Approve(recipient,amount) te permite habilitar a una direccion a poder usar los fondos que vos indiques como parametro. 
Luego allowance(from , recipient) te devuelve cuando token dejas que use otra direccion. Consulta el mapping _allowances
transferFrom(from, to , amount) te permite enviamos los fondos hacia la address que vos quieras siempre que estes dentro de _allowances


This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```