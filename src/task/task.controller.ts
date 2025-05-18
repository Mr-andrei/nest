import { Body, Controller, Get, HttpStatus, Param, Patch, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-tasks.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Task')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {
  }

  @ApiOperation({
    summary: 'Получить все записи',
    description: 'Возвращает список со всеми фильмами',
  })
  @ApiResponse({ status: HttpStatus.OK, description: 'Фильмы  найдеы' })
  @Get('all')
  findAll() {
    return this.taskService.findAll();
  }

  @ApiOperation({
    summary: 'Получить одну запись',
    description: 'Возвращает одну запись по индификатору',
  })
  // @ApiParam({ name: 'id', type: 'string', description: 'Id задачи' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Фильм  найден' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Фильм не найден' })
  @Get('by-id/:id')
  findById(@Param('id') id: string) {
    return this.taskService.findById(+id);
  }

  @ApiOperation({
    summary: 'Создать задачу',
    description: 'Создает задачу',
  })
  // @ApiBody({
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       title: { type: 'string' },
  //       isCompleted: { type: 'boolean' },
  //     },
  //   },
  // })
  @Post()
  create(@Body() dto: CreateTaskDto) {
    return this.taskService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    return this.taskService.update(+id, dto);
  }

  @Patch(':id')
  patchUpdate(@Param('id') id: string, @Body() dto: Partial<UpdateTaskDto>) {
    return this.taskService.patchUpdate(+id, dto);
  }
}
