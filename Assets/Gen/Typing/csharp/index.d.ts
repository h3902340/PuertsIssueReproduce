
declare module 'csharp' {
    interface $Ref<T> {}
    
    interface $Task<T> {}
    
    namespace System {
        class Type extends System.Reflection.MemberInfo {
            public static FilterAttribute: System.Reflection.MemberFilter;
            public static FilterName: System.Reflection.MemberFilter;
            public static FilterNameIgnoreCase: System.Reflection.MemberFilter;
            public static Missing: any;
            public static Delimiter: System.Char;
            public static EmptyTypes: System.Type[];
            public MemberType: System.Reflection.MemberTypes;
            public DeclaringType: System.Type;
            public DeclaringMethod: System.Reflection.MethodBase;
            public ReflectedType: System.Type;
            public StructLayoutAttribute: System.Runtime.InteropServices.StructLayoutAttribute;
            public GUID: System.Guid;
            public static DefaultBinder: System.Reflection.Binder;
            public Module: System.Reflection.Module;
            public Assembly: System.Reflection.Assembly;
            public TypeHandle: System.RuntimeTypeHandle;
            public FullName: string;
            public Namespace: string;
            public AssemblyQualifiedName: string;
            public BaseType: System.Type;
            public TypeInitializer: System.Reflection.ConstructorInfo;
            public IsNested: boolean;
            public Attributes: System.Reflection.TypeAttributes;
            public GenericParameterAttributes: System.Reflection.GenericParameterAttributes;
            public IsVisible: boolean;
            public IsNotPublic: boolean;
            public IsPublic: boolean;
            public IsNestedPublic: boolean;
            public IsNestedPrivate: boolean;
            public IsNestedFamily: boolean;
            public IsNestedAssembly: boolean;
            public IsNestedFamANDAssem: boolean;
            public IsNestedFamORAssem: boolean;
            public IsAutoLayout: boolean;
            public IsLayoutSequential: boolean;
            public IsExplicitLayout: boolean;
            public IsClass: boolean;
            public IsInterface: boolean;
            public IsValueType: boolean;
            public IsAbstract: boolean;
            public IsSealed: boolean;
            public IsEnum: boolean;
            public IsSpecialName: boolean;
            public IsImport: boolean;
            public IsSerializable: boolean;
            public IsAnsiClass: boolean;
            public IsUnicodeClass: boolean;
            public IsAutoClass: boolean;
            public IsArray: boolean;
            public IsGenericType: boolean;
            public IsGenericTypeDefinition: boolean;
            public IsConstructedGenericType: boolean;
            public IsGenericParameter: boolean;
            public GenericParameterPosition: number;
            public ContainsGenericParameters: boolean;
            public IsByRef: boolean;
            public IsPointer: boolean;
            public IsPrimitive: boolean;
            public IsCOMObject: boolean;
            public HasElementType: boolean;
            public IsContextful: boolean;
            public IsMarshalByRef: boolean;
            public GenericTypeArguments: System.Type[];
            public IsSecurityCritical: boolean;
            public IsSecuritySafeCritical: boolean;
            public IsSecurityTransparent: boolean;
            public UnderlyingSystemType: System.Type;
            public static GetType(typeName: string, assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>):System.Type;
            public static GetType(typeName: string, assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, throwOnError: boolean):System.Type;
            public static GetType(typeName: string, assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, throwOnError: boolean, ignoreCase: boolean):System.Type;
            public MakePointerType():System.Type;
            public MakeByRefType():System.Type;
            public MakeArrayType():System.Type;
            public MakeArrayType(rank: number):System.Type;
            public static GetTypeFromProgID(progID: string):System.Type;
            public static GetTypeFromProgID(progID: string, throwOnError: boolean):System.Type;
            public static GetTypeFromProgID(progID: string, server: string):System.Type;
            public static GetTypeFromProgID(progID: string, server: string, throwOnError: boolean):System.Type;
            public static GetTypeFromCLSID(clsid: System.Guid):System.Type;
            public static GetTypeFromCLSID(clsid: System.Guid, throwOnError: boolean):System.Type;
            public static GetTypeFromCLSID(clsid: System.Guid, server: string):System.Type;
            public static GetTypeFromCLSID(clsid: System.Guid, server: string, throwOnError: boolean):System.Type;
            public static GetTypeCode(type: System.Type):System.TypeCode;
            public InvokeMember(name: string, invokeAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, target: any, args: any[], modifiers: System.Reflection.ParameterModifier[], culture: System.Globalization.CultureInfo, namedParameters: string[]):any;
            public InvokeMember(name: string, invokeAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, target: any, args: any[], culture: System.Globalization.CultureInfo):any;
            public InvokeMember(name: string, invokeAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, target: any, args: any[]):any;
            public static GetTypeHandle(o: any):System.RuntimeTypeHandle;
            public GetArrayRank():number;
            public GetConstructor(bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, callConvention: System.Reflection.CallingConventions, types: System.Type[], modifiers: System.Reflection.ParameterModifier[]):System.Reflection.ConstructorInfo;
            public GetConstructor(bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, types: System.Type[], modifiers: System.Reflection.ParameterModifier[]):System.Reflection.ConstructorInfo;
            public GetConstructor(types: System.Type[]):System.Reflection.ConstructorInfo;
            public GetConstructors():System.Reflection.ConstructorInfo[];
            public GetConstructors(bindingAttr: System.Reflection.BindingFlags):System.Reflection.ConstructorInfo[];
            public GetMethod(name: string, bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, callConvention: System.Reflection.CallingConventions, types: System.Type[], modifiers: System.Reflection.ParameterModifier[]):System.Reflection.MethodInfo;
            public GetMethod(name: string, bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, types: System.Type[], modifiers: System.Reflection.ParameterModifier[]):System.Reflection.MethodInfo;
            public GetMethod(name: string, types: System.Type[], modifiers: System.Reflection.ParameterModifier[]):System.Reflection.MethodInfo;
            public GetMethod(name: string, types: System.Type[]):System.Reflection.MethodInfo;
            public GetMethod(name: string, bindingAttr: System.Reflection.BindingFlags):System.Reflection.MethodInfo;
            public GetMethod(name: string):System.Reflection.MethodInfo;
            public GetMethods():System.Reflection.MethodInfo[];
            public GetMethods(bindingAttr: System.Reflection.BindingFlags):System.Reflection.MethodInfo[];
            public GetField(name: string, bindingAttr: System.Reflection.BindingFlags):System.Reflection.FieldInfo;
            public GetField(name: string):System.Reflection.FieldInfo;
            public GetFields():System.Reflection.FieldInfo[];
            public GetFields(bindingAttr: System.Reflection.BindingFlags):System.Reflection.FieldInfo[];
            public GetInterface(name: string):System.Type;
            public GetInterface(name: string, ignoreCase: boolean):System.Type;
            public GetInterfaces():System.Type[];
            public FindInterfaces(filter: System.Reflection.TypeFilter, filterCriteria: any):System.Type[];
            public GetEvent(name: string):System.Reflection.EventInfo;
            public GetEvent(name: string, bindingAttr: System.Reflection.BindingFlags):System.Reflection.EventInfo;
            public GetEvents():System.Reflection.EventInfo[];
            public GetEvents(bindingAttr: System.Reflection.BindingFlags):System.Reflection.EventInfo[];
            public GetProperty(name: string, bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, returnType: System.Type, types: System.Type[], modifiers: System.Reflection.ParameterModifier[]):System.Reflection.PropertyInfo;
            public GetProperty(name: string, returnType: System.Type, types: System.Type[], modifiers: System.Reflection.ParameterModifier[]):System.Reflection.PropertyInfo;
            public GetProperty(name: string, bindingAttr: System.Reflection.BindingFlags):System.Reflection.PropertyInfo;
            public GetProperty(name: string, returnType: System.Type, types: System.Type[]):System.Reflection.PropertyInfo;
            public GetProperty(name: string, types: System.Type[]):System.Reflection.PropertyInfo;
            public GetProperty(name: string, returnType: System.Type):System.Reflection.PropertyInfo;
            public GetProperty(name: string):System.Reflection.PropertyInfo;
            public GetProperties(bindingAttr: System.Reflection.BindingFlags):System.Reflection.PropertyInfo[];
            public GetProperties():System.Reflection.PropertyInfo[];
            public GetNestedTypes():System.Type[];
            public GetNestedTypes(bindingAttr: System.Reflection.BindingFlags):System.Type[];
            public GetNestedType(name: string):System.Type;
            public GetNestedType(name: string, bindingAttr: System.Reflection.BindingFlags):System.Type;
            public GetMember(name: string):System.Reflection.MemberInfo[];
            public GetMember(name: string, bindingAttr: System.Reflection.BindingFlags):System.Reflection.MemberInfo[];
            public GetMember(name: string, type: System.Reflection.MemberTypes, bindingAttr: System.Reflection.BindingFlags):System.Reflection.MemberInfo[];
            public GetMembers():System.Reflection.MemberInfo[];
            public GetMembers(bindingAttr: System.Reflection.BindingFlags):System.Reflection.MemberInfo[];
            public GetDefaultMembers():System.Reflection.MemberInfo[];
            public FindMembers(memberType: System.Reflection.MemberTypes, bindingAttr: System.Reflection.BindingFlags, filter: System.Reflection.MemberFilter, filterCriteria: any):System.Reflection.MemberInfo[];
            public GetGenericParameterConstraints():System.Type[];
            public MakeGenericType(...typeArguments: System.Type[]):System.Type;
            public GetElementType():System.Type;
            public GetGenericArguments():System.Type[];
            public GetGenericTypeDefinition():System.Type;
            public GetEnumNames():string[];
            public GetEnumValues():System.Array;
            public GetEnumUnderlyingType():System.Type;
            public IsEnumDefined(value: any):boolean;
            public GetEnumName(value: any):string;
            public IsSubclassOf(c: System.Type):boolean;
            public IsInstanceOfType(o: any):boolean;
            public IsAssignableFrom(c: System.Type):boolean;
            public IsEquivalentTo(other: System.Type):boolean;
            public ToString():string;
            public static GetTypeArray(args: any[]):System.Type[];
            public Equals(o: any):boolean;
            public Equals(o: System.Type):boolean;
            public static op_Equality(left: System.Type, right: System.Type):boolean;
            public static op_Inequality(left: System.Type, right: System.Type):boolean;
            public GetHashCode():number;
            public GetInterfaceMap(interfaceType: System.Type):System.Reflection.InterfaceMapping;
            public GetType():System.Type;
            public static GetType(typeName: string):System.Type;
            public static GetType(typeName: string, throwOnError: boolean):System.Type;
            public static GetType(typeName: string, throwOnError: boolean, ignoreCase: boolean):System.Type;
            public static ReflectionOnlyGetType(typeName: string, throwIfNotFound: boolean, ignoreCase: boolean):System.Type;
            public static GetTypeFromHandle(handle: System.RuntimeTypeHandle):System.Type;
            
        }
        class Object {
            
        }
        class Boolean extends System.ValueType {
            
        }
        class ValueType extends System.Object {
            
        }
        type MulticastDelegate = (...args:any[]) => any;
        var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
        class Delegate extends System.Object {
            
        }
        class Char extends System.ValueType {
            
        }
        class Enum extends System.ValueType {
            
        }
        class String extends System.Object {
            
        }
        type Func$2<T,TResult> = (arg: T) => TResult;
        type Func$4<T1,T2,T3,TResult> = (arg1: T1, arg2: T2, arg3: T3) => TResult;
        class Attribute extends System.Object {
            
        }
        class Int32 extends System.ValueType {
            
        }
        class Guid extends System.ValueType {
            
        }
        enum TypeCode { Empty = 0, Object = 1, DBNull = 2, Boolean = 3, Char = 4, SByte = 5, Byte = 6, Int16 = 7, UInt16 = 8, Int32 = 9, UInt32 = 10, Int64 = 11, UInt64 = 12, Single = 13, Double = 14, Decimal = 15, DateTime = 16, String = 18 }
        class Array extends System.Object {
            
        }
        class RuntimeTypeHandle extends System.ValueType {
            
        }
        class Void extends System.ValueType {
            
        }
        type Action = () => void;
        var Action: {new (func: () => void): Action;}
        
    }
    namespace System.Reflection {
        class MemberInfo extends System.Object {
            
        }
        type MemberFilter = (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean;
        var MemberFilter: {new (func: (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean): MemberFilter;}
        enum MemberTypes { Constructor = 1, Event = 2, Field = 4, Method = 8, Property = 16, TypeInfo = 32, Custom = 64, NestedType = 128, All = 191 }
        class MethodBase extends System.Reflection.MemberInfo {
            
        }
        class AssemblyName extends System.Object {
            
        }
        class Assembly extends System.Object {
            
        }
        class Binder extends System.Object {
            
        }
        enum BindingFlags { Default = 0, IgnoreCase = 1, DeclaredOnly = 2, Instance = 4, Static = 8, Public = 16, NonPublic = 32, FlattenHierarchy = 64, InvokeMethod = 256, CreateInstance = 512, GetField = 1024, SetField = 2048, GetProperty = 4096, SetProperty = 8192, PutDispProperty = 16384, PutRefDispProperty = 32768, ExactBinding = 65536, SuppressChangeType = 131072, OptionalParamBinding = 262144, IgnoreReturn = 16777216 }
        class ParameterModifier extends System.ValueType {
            
        }
        class Module extends System.Object {
            
        }
        class ConstructorInfo extends System.Reflection.MethodBase {
            
        }
        enum CallingConventions { Standard = 1, VarArgs = 2, Any = 3, HasThis = 32, ExplicitThis = 64 }
        class MethodInfo extends System.Reflection.MethodBase {
            
        }
        class FieldInfo extends System.Reflection.MemberInfo {
            
        }
        type TypeFilter = (m: System.Type, filterCriteria: any) => boolean;
        var TypeFilter: {new (func: (m: System.Type, filterCriteria: any) => boolean): TypeFilter;}
        class EventInfo extends System.Reflection.MemberInfo {
            
        }
        class PropertyInfo extends System.Reflection.MemberInfo {
            
        }
        enum TypeAttributes { VisibilityMask = 7, NotPublic = 0, Public = 1, NestedPublic = 2, NestedPrivate = 3, NestedFamily = 4, NestedAssembly = 5, NestedFamANDAssem = 6, NestedFamORAssem = 7, LayoutMask = 24, AutoLayout = 0, SequentialLayout = 8, ExplicitLayout = 16, ClassSemanticsMask = 32, Class = 0, Interface = 32, Abstract = 128, Sealed = 256, SpecialName = 1024, Import = 4096, Serializable = 8192, WindowsRuntime = 16384, StringFormatMask = 196608, AnsiClass = 0, UnicodeClass = 65536, AutoClass = 131072, CustomFormatClass = 196608, CustomFormatMask = 12582912, BeforeFieldInit = 1048576, ReservedMask = 264192, RTSpecialName = 2048, HasSecurity = 262144 }
        enum GenericParameterAttributes { None = 0, VarianceMask = 3, Covariant = 1, Contravariant = 2, SpecialConstraintMask = 28, ReferenceTypeConstraint = 4, NotNullableValueTypeConstraint = 8, DefaultConstructorConstraint = 16 }
        class InterfaceMapping extends System.ValueType {
            
        }
        
    }
    namespace System.Runtime.InteropServices {
        class StructLayoutAttribute extends System.Attribute {
            
        }
        
    }
    namespace System.Globalization {
        class CultureInfo extends System.Object {
            
        }
        
    }
    
        class TestClass extends UnityEngine.MonoBehaviour {
            public static Instance: TestClass;
            public module: string;
            public constructor();
            public GetMessage():void;
            
        }
        
    
    namespace UnityEngine {
        class MonoBehaviour extends UnityEngine.Behaviour {
            
        }
        class Behaviour extends UnityEngine.Component {
            
        }
        class Component extends UnityEngine.Object {
            
        }
        class Object extends System.Object {
            
        }
        
    }
    namespace PuertsTest {
        class JsBehaviour extends UnityEngine.MonoBehaviour {
            public ModuleName: string;
            public JsStart: System.Action;
            public JsUpdate: System.Action;
            public JsOnDestroy: System.Action;
            public static jsEnv: Puerts.JsEnv;
            public constructor();
            
        }
        
    }
    namespace Puerts {
        class JsEnv extends System.Object {
            
        }
        
    }
    
}