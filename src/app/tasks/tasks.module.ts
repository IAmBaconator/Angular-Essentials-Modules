import { NgModule } from "@angular/core";

import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";

@NgModule({
    declarations: [NewTaskComponent, TaskComponent, TasksComponent],
    exports: [TasksComponent]
})

export class TasksModule {}