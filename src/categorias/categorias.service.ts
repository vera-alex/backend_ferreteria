import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';

@ApiTags('categorias')
@Injectable()
export class CategoriasService {
  constructor(@InjectRepository(Categoria) private categoriasRepository: Repository<Categoria>) {}

  async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    const existe = await this.categoriasRepository.findOneBy({
      nombre: createCategoriaDto.nombre.trim(),
    });

    if (existe) {
      throw new ConflictException('La categoria ya existe');
    }

    return this.categoriasRepository.save({
      nombre: createCategoriaDto.nombre.trim(),
    });
  }

  async findAll(): Promise<Categoria[]> {
    return this.categoriasRepository.find();
  }

  async findOne(id: number): Promise<Categoria> {
    const categoria = await this.categoriasRepository.findOneBy({ id });
    if (!categoria) {
      throw new NotFoundException(`La categoria ${id} no existe`);
    }
    return categoria;
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto): Promise<Categoria> {
    const categoria = await this.findOne(id);
    const categoriaUpdate = Object.assign(categoria, updateCategoriaDto);
    return this.categoriasRepository.save(categoriaUpdate);
  }

  async remove(id: number) {
    const categoria = await this.findOne(id);
    return this.categoriasRepository.delete(categoria.id);
  }
}
