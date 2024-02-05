import { Injectable } from '@nestjs/common';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VehiculosService {
  constructor (private prisma: PrismaService){}
  create(createVehiculoDto: CreateVehiculoDto) {
    return 'This action adds a new vehiculo';
  }

  findAll() {
    return `This action returns all vehiculos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehiculo`;
  }

  update(id: number, updateVehiculoDto: UpdateVehiculoDto) {
    return `This action updates a #${id} vehiculo`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehiculo`;
  }
}
