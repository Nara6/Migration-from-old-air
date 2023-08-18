/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class FileService {
    async callFileService(base64: string): Promise<any> {
        const fileServiceUrl = process.env.FILE_SERVICE_URL;

        try {
            const data = {
                image: base64
            };
            const response = await axios.post(fileServiceUrl, data);
            return response.data;
        } catch (error) {
            console.log(error)
            throw new BadRequestException('Failed to call File service');
        }
    }
}
