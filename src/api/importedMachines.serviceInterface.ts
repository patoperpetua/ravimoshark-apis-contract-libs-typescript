/**
 * Ravimoshark Contract API
 * This is an API to interact with Ravimoshark contracts database. # Introduction This API allow to create, modify and delete contracts and machines. It also interacts with machines imported from SAGE database. # User Authentication This API does not contain any kind of user validation but It request to have a valid authentication user to interact with it. For more information about user Authentication, please refer to [Ravimoshark User Authentication](https://ravimoshark.com/back/apis/auth/latest). 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: dev@ravimoshark.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs/Observable';


import { CustomError } from '../model/customError';
import { Deleted } from '../model/deleted';
import { IdInteger } from '../model/idInteger';
import { ImportedMachines } from '../model/importedMachines';
import { InlineResponse2001 } from '../model/inlineResponse2001';
import { Machines } from '../model/machines';


import { Configuration }                                     from '../configuration';


export interface ImportedMachinesServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Add one imported Machine.
    * Add one imported Machine.
    * @param body 
    */
    addImportedMachine(body?: ImportedMachines, extraHttpRequestParams?: any): Observable<ImportedMachines>;

    /**
    * Delete one imported Machine.
    * Delete one imported Machine.
    * @param id id to delete or search
    */
    deleteImportedMachine(id: number, extraHttpRequestParams?: any): Observable<IdInteger>;

    /**
    * Edit one imported Machine.
    * Edit one imported Machine.
    * @param body 
    */
    editImportedMachine(body?: ImportedMachines, extraHttpRequestParams?: any): Observable<ImportedMachines>;

    /**
    * Get one imported Machine.
    * Get one imported Machine.
    * @param id id to delete or search
    * @param deleted Get all, deleted, not deleted data. Default not deleted.
    */
    getImportedMachineById(id: number, deleted?: Deleted, extraHttpRequestParams?: any): Observable<Machines>;

    /**
    * Get all imported Machines.
    * Get all imported Machines.
    * @param skip number of item to skip
    * @param limit max records to return
    * @param orderBy order by property.
    * @param filterBy filter data.
    * @param deleted Get all, deleted, not deleted data. Default not deleted.
    * @param metadata If metadata is needed (for pagination controls)
    */
    getImportedMachines(skip: number, limit: number, orderBy?: string, filterBy?: string, deleted?: Deleted, metadata?: boolean, extraHttpRequestParams?: any): Observable<InlineResponse2001>;

}
