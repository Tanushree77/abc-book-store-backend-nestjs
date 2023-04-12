export class ResponseUtils {
    static res: any
    static buildData(googlepayResponse: any) {
        throw new Error('Method not implemented.')
    }
    
    static respondError(res, status, msg) {
        return res.status(status).send({ message: msg })
    }

    static respond(res, status, payloads) {
        return res.status(status).send(payloads)
    }
}
