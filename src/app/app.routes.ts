import { Routes } from '@angular/router';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { DirectiveComponent } from './component/directive/directive.component';
import { ControlFlowComponent } from './component/control-flow/control-flow.component';
import { DeferComponent } from './component/defer/defer.component';
import { ResourceApiComponent } from './component/resource-api/resource-api.component';
import { HooksComponent } from './component/hooks/hooks.component';
import { HttpClientComponent } from './component/http-client/http-client.component';
import { PipesComponent } from './component/pipes/pipes.component';
import { TemplateDrivenFormComponent } from './component/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { ComplexFormComponent } from './component/complex-form/complex-form.component';
import { FormBuilderComponent } from './component/form-builder/form-builder.component';
import { SignalComponent } from './component/signal/signal.component';
import { ComputedSignalComponent } from './component/computed-signal/computed-signal.component';
import { LinkedSignalComponent } from './component/linked-signal/linked-signal.component';

export const routes: Routes = [
    {path : "dataBinding",component : DataBindingComponent},
    {path : "directive",component : DirectiveComponent},
    {path : "control-flow",component : ControlFlowComponent},
    {path : "defer",component : DeferComponent},
    {path : "resource-api",component : ResourceApiComponent},
    {path : "hooks",component : HooksComponent},
    {path : "http-client",component : HttpClientComponent},
    {path : "pipes",component : PipesComponent},
    {path : "template-driven-form",component : TemplateDrivenFormComponent},
    {path : "reactive-form",component : ReactiveFormComponent},
    {path : "form-builder",component : FormBuilderComponent},
    {path : "complex-form",component : ComplexFormComponent},
    {path : "signals",component : SignalComponent},
    {path : "computed-signal",component : ComputedSignalComponent},
    {path : "linked-signal",component : LinkedSignalComponent},
];
