import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-tasks.dto';


@Injectable()
export class TaskService {
  private tasks = [
    {
      id: 1,
      title: 'Learn nestJs',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Learn nestJs',
      isCompleted: true,
    },
  ];

  findAll() {
    return this.tasks;
  }

  findById(id: number) {
    const task = this.tasks.find((elm) => elm.id === id);

    if (!task) {
      throw new NotFoundException(`Task not found with id ${id}`);
    }

    return task;
  }

  create(dto: CreateTaskDto) {

    const task = dto;

    const newTask = {
      id: this.tasks.length + 1,
      ...task
    };

    this.tasks.push(newTask);

    return true;
  }

  update(id: number, dto: UpdateTaskDto) {

    const { title, isCompleted } = dto;

    const task = this.findById(id);

    task.title = title;
    task.isCompleted = isCompleted;

    return task;
  }

  patchUpdate(id: number, dto: Partial<UpdateTaskDto>) {

    const task = this.findById(id);

    Object.assign(task, dto);

    return task;
  }

}
