package com.ontimize.api.core.service;

import java.util.List;
import java.util.Map;

import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

public interface IGastoService {

	// GASTO
	public EntityResult gastoQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException;

	public EntityResult gastoInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;

	public EntityResult gastoUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException;

	public EntityResult gastoDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

	// CATEGORY

	public EntityResult categoryQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException;

	public EntityResult categoryInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;

	public EntityResult categoryUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException;

	public EntityResult categoryDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
	
	EntityResult gastoDetailsQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException;
}
