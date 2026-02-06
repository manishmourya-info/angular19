import { ChildRouteDetailsComponent } from './component/child-route-details/child-route-details.component';
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
import { RouteComponent } from './component/route/route.component';
import { LazyLoadingComponent } from './component/lazy-loading/lazy-loading.component';
import { ChildRouteComponent } from './component/child-route/child-route.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ChildRouteListComponent } from './component/child-route-list/child-route-list.component';
import { authGuard } from './guard/auth.guard';
import { deactivateGuard } from './guard/deactivate.guard';
import { matchGuard } from './guard/match.guard';
import { childAuthGuard } from './guard/child-auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'dataBinding', pathMatch: 'full' },
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
    {
        path : "route",
        component : RouteComponent,
        data: { title: 'Dashboard' },
        canActivate : [authGuard]

    },
    {path : "route/:id",component : RouteComponent},
    {
        path : "child-route",
        component : ChildRouteComponent,
        canActivateChild : [childAuthGuard],
        children : [
            {path : "",component : ChildRouteListComponent},
            {path : ":id",component : ChildRouteDetailsComponent, canDeactivate : [deactivateGuard]},
        ]
    },
    {
        path : "lazy-load",
        canMatch : [matchGuard],
        loadComponent: () =>
             import("./component/lazy-loading/lazy-loading.component")
            .then(c => c.LazyLoadingComponent)
    },
    { path: '**', component: NotFoundComponent }

];
