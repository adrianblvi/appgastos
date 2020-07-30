package com.ontimize.api.core.service;

import java.util.List;
import java.util.Map;

import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

public interface IParteService {

	// PARTES

	public EntityResult parteQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException;

	public EntityResult parteInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;

	public EntityResult parteUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException;

	public EntityResult parteDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

	// STATUS
	public EntityResult statusQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException;

	public EntityResult statusInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;

	public EntityResult statusUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException;

	public EntityResult statusDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
	
	EntityResult parteDetailsQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException;
	
	


}
