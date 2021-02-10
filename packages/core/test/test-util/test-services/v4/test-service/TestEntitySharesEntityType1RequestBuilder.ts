/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '../../../../../src';
import { TestEntitySharesEntityType1 } from './TestEntitySharesEntityType1';

/**
 * Request builder class for operations supported on the [[TestEntitySharesEntityType1]] entity.
 */
export class TestEntitySharesEntityType1RequestBuilder extends RequestBuilder<TestEntitySharesEntityType1> {
  /**
   * Returns a request builder for retrieving one `TestEntitySharesEntityType1` entity based on its keys.
   * @param keyPropertyString Key property. See [[TestEntitySharesEntityType1.keyPropertyString]].
   * @returns A request builder for creating requests to retrieve one `TestEntitySharesEntityType1` entity based on its keys.
   */
  getByKey(keyPropertyString: string): GetByKeyRequestBuilderV4<TestEntitySharesEntityType1> {
    return new GetByKeyRequestBuilderV4(TestEntitySharesEntityType1, { KeyPropertyString: keyPropertyString });
  }

  /**
   * Returns a request builder for querying all `TestEntitySharesEntityType1` entities.
   * @returns A request builder for creating requests to retrieve all `TestEntitySharesEntityType1` entities.
   */
  getAll(): GetAllRequestBuilderV4<TestEntitySharesEntityType1> {
    return new GetAllRequestBuilderV4(TestEntitySharesEntityType1);
  }

  /**
   * Returns a request builder for creating a `TestEntitySharesEntityType1` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TestEntitySharesEntityType1`.
   */
  create(entity: TestEntitySharesEntityType1): CreateRequestBuilderV4<TestEntitySharesEntityType1> {
    return new CreateRequestBuilderV4(TestEntitySharesEntityType1, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `TestEntitySharesEntityType1`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TestEntitySharesEntityType1`.
   */
  update(entity: TestEntitySharesEntityType1): UpdateRequestBuilderV4<TestEntitySharesEntityType1> {
    return new UpdateRequestBuilderV4(TestEntitySharesEntityType1, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TestEntitySharesEntityType1`.
   * @param keyPropertyString Key property. See [[TestEntitySharesEntityType1.keyPropertyString]].
   * @returns A request builder for creating requests that delete an entity of type `TestEntitySharesEntityType1`.
   */
  delete(keyPropertyString: string): DeleteRequestBuilderV4<TestEntitySharesEntityType1>;
  /**
   * Returns a request builder for deleting an entity of type `TestEntitySharesEntityType1`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TestEntitySharesEntityType1` by taking the entity as a parameter.
   */
  delete(entity: TestEntitySharesEntityType1): DeleteRequestBuilderV4<TestEntitySharesEntityType1>;
  delete(keyPropertyStringOrEntity: any): DeleteRequestBuilderV4<TestEntitySharesEntityType1> {
    return new DeleteRequestBuilderV4(TestEntitySharesEntityType1, keyPropertyStringOrEntity instanceof TestEntitySharesEntityType1 ? keyPropertyStringOrEntity : { KeyPropertyString: keyPropertyStringOrEntity! });
  }
}