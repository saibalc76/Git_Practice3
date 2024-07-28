export funtion double (arg: Number, second: any) {
    return arg * arg
}

export const zrintMessageT = (message: String) => {
    console.log(message)

}

export class MaminHandler{

    Private ports: string[] = []

    registerPort(ports: String){
        this.ports.push(port)

    }

getPort(index: number): string | undefined{
    return this.ports[index]
  }
}